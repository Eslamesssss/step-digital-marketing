"""Split docs/assets/step-astronaut-cutout.webp into aligned body/head layers (same 900x1125 canvas).
No redraw: head = original pixels above a cut along the dark underside of the helmet ring;
body = original pixels below it, plus a dark scarf-colour extension hidden under the helmet so tiny head
movement never reveals transparency. At neutral, head over body reproduces the source image."""
from PIL import Image
import numpy as np, sys
Q=int(sys.argv[1]) if len(sys.argv)>1 else 92
src='docs/assets/step-astronaut-cutout.webp'
im=np.array(Image.open(src).convert('RGBA')).astype(np.float32)
H,W=im.shape[:2]
pts=[(340,258),(355,258),(370,261),(380,265),(390,268),(400,270),(420,275),(440,278),(460,280),(480,281),(500,282),(520,279),(535,276),(548,270),(560,266),(600,266)]
xs=np.arange(W);cut=np.interp(xs,[p[0] for p in pts],[p[1] for p in pts]).astype(np.float32)
k=np.ones(9)/9;cut[340:600]=np.convolve(np.pad(cut,(4,4),mode='edge'),k,mode='valid')[340:600]
yy=np.arange(H)[:,None].astype(np.float32)
inx=((xs>=330)&(xs<=600))[None,:]
# head alpha factor: 1 above cut, ramp to 0 over 1.5px below
ramp=np.clip(1-(yy-cut[None,:])/1.5,0,1)*inx
ramp[:120,:]=np.where(inx,1,0)[0:1,:].repeat(120,0)  # rows above cut always head within x window
head=im.copy();head[...,3]=im[...,3]*np.where(inx&(yy<=cut[None,:]),1,ramp)
# body: original below (cut-1); above that dark extension under the helmet only
body=im.copy()
a0=im[...,3]/255;r=np.where(inx,np.clip(1-(yy-cut[None,:])/1.5,0,1),0)
r=np.where(inx&(yy<=cut[None,:]),1,r)
den=1-r*a0
ba=np.where(den<1e-3,np.where(yy<cut[None,:]-1,0,1),a0*(1-r)/np.maximum(den,1e-3))
ba=np.where(inx&(yy<cut[None,:]-1),0,ba)
body[...,3]=ba*255
# hidden extension: only where the head fully covers at neutral (alpha eroded 2px so it never pokes past the silhouette)
from PIL import ImageFilter
solid=Image.fromarray(((im[...,3]>250)*255).astype(np.uint8)).filter(ImageFilter.MinFilter(5))
solid=np.array(solid)>0
for x in range(340,601):
    c=int(round(cut[x]));base=im[c+2,x].copy()
    for y in range(c-16,c+1):
        if not solid[y,x]:continue
        t=min(1,(y-(c-16))/4)
        body[y,x,:3]=base[:3];body[y,x,3]=max(body[y,x,3],255*t)
Image.fromarray(np.clip(body,0,255).astype(np.uint8),'RGBA').save('docs/assets/step-astronaut-body.webp',quality=Q,alpha_quality=100,method=6,exact=True)
Image.fromarray(np.clip(head,0,255).astype(np.uint8),'RGBA').save('docs/assets/step-astronaut-head.webp',quality=Q,alpha_quality=100,method=6,exact=True)
# verify neutral reproduction
b=np.array(Image.open('docs/assets/step-astronaut-body.webp').convert('RGBA')).astype(np.float32)/255
h=np.array(Image.open('docs/assets/step-astronaut-head.webp').convert('RGBA')).astype(np.float32)/255
ha=h[...,3:];ba=b[...,3:]
oa=ha+ba*(1-ha);rgb=(h[...,:3]*ha+b[...,:3]*ba*(1-ha))/np.maximum(oa,1e-6)
o=im/255
d=np.abs(np.concatenate([rgb,oa],axis=2)-o)
# compare premultiplied to ignore colour of transparent pixels
dp=np.abs(rgb*oa-o[...,:3]*o[...,3:]);print('max premult RGB diff',dp.max()*255,'mean',dp.mean()*255,'max alpha diff',np.abs(oa-o[...,3:]).max()*255)
