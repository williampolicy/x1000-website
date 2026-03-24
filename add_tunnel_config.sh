#!/bin/bash
# X1000.ai Cloudflare Tunnel Configuration Script
# Run with: sudo bash add_tunnel_config.sh

CONFIG_FILE="/etc/cloudflared/config.yml"
BACKUP_FILE="/etc/cloudflared/config.yml.bak.$(date +%Y%m%d_%H%M%S)"

echo "================================================"
echo "  X1000.ai Cloudflare Tunnel Configuration"
echo "================================================"

# Backup current config
cp "$CONFIG_FILE" "$BACKUP_FILE"
echo "[OK] Backup created: $BACKUP_FILE"

# Check if x1000.ai already exists
if grep -q "hostname: x1000.ai$" "$CONFIG_FILE"; then
    echo "[SKIP] x1000.ai already configured"
else
    # Add before the default 404 rule
    sed -i '/# 默认 404/i\  # ============================================================================\n  # M535 X1000.ai - The Leverage Operating System (Main Website)\n  # Build 1000x leverage for humans and organizations\n  # ============================================================================\n  - hostname: x1000.ai\n    service: http://localhost:3010\n\n  - hostname: www.x1000.ai\n    service: http://localhost:3010\n' "$CONFIG_FILE"
    echo "[OK] Added x1000.ai and www.x1000.ai routes"
fi

# Validate config
echo ""
echo "Validating configuration..."
cloudflared tunnel ingress validate
if [ $? -eq 0 ]; then
    echo "[OK] Configuration valid"

    # Restart cloudflared
    echo ""
    echo "Restarting cloudflared service..."
    systemctl restart cloudflared
    sleep 3
    systemctl status cloudflared --no-pager | head -5

    echo ""
    echo "================================================"
    echo "  Configuration Complete!"
    echo "  Test: curl -I https://www.x1000.ai"
    echo "================================================"
else
    echo "[ERROR] Configuration invalid, restoring backup"
    cp "$BACKUP_FILE" "$CONFIG_FILE"
fi
