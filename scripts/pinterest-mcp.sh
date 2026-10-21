#!/usr/bin/env bash
# Launches the Pinterest MCP server (pinterest-mcp-server, published on Smithery as "mcp-pinterest").
# The server only looks for Chrome at /usr/bin/google-chrome on Linux, so point that path at the
# Playwright Chromium that cloud sessions ship with when no Chrome is installed.
set -euo pipefail

if [ ! -e /usr/bin/google-chrome ] && [ -x /opt/pw-browsers/chromium ] && [ -w /usr/bin ]; then
  ln -s /opt/pw-browsers/chromium /usr/bin/google-chrome
fi

export MCP_PINTEREST_DOWNLOAD_DIR="${MCP_PINTEREST_DOWNLOAD_DIR:-$(dirname "$0")/../pinterest-downloads}"
exec npx -y pinterest-mcp-server@1.2.0 "$@"
