#!/bin/bash
# X1000.ai Deployment Script
# V5.3 Ecosystem Standard Compliant

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PROJECT_NAME="x1000-web"
COMPOSE_FILE="docker-compose.yml"
ECOSYSTEM_VERSION="5.3"

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

show_banner() {
    echo -e "${BLUE}"
    echo "╔═══════════════════════════════════════════════════════════╗"
    echo "║                     X1000.ai Deployment                    ║"
    echo "║                  V5.3 Ecosystem Standard                   ║"
    echo "║                  LIGHT HOPE · Build 1000x                  ║"
    echo "╚═══════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

preflight_check() {
    log_info "Running pre-flight checks..."

    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed"
        exit 1
    fi

    if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
        log_error "Docker Compose is not installed"
        exit 1
    fi

    if [ ! -f "$COMPOSE_FILE" ]; then
        log_error "docker-compose.yml not found"
        exit 1
    fi

    if [ ! -f ".env" ] && [ ! -f ".env.local" ]; then
        log_warning ".env file not found, using defaults"
    fi

    log_success "Pre-flight checks passed"
}

build() {
    log_info "Building X1000.ai..."
    docker compose -f $COMPOSE_FILE build --no-cache
    log_success "Build completed"
}

start() {
    log_info "Starting X1000.ai services..."
    docker compose -f $COMPOSE_FILE up -d

    log_info "Waiting for health check..."
    sleep 10

    health_status=$(docker inspect --format='{{.State.Health.Status}}' x1000_web 2>/dev/null || echo "unknown")

    if [ "$health_status" = "healthy" ]; then
        log_success "X1000.ai is running and healthy!"
        echo ""
        echo -e "  ${GREEN}→${NC} Local:     http://localhost:3000"
        echo -e "  ${GREEN}→${NC} Health:    http://localhost:3000/api/health"
        echo -e "  ${GREEN}→${NC} Metrics:   http://localhost:3000/api/metrics"
        echo ""
    elif [ "$health_status" = "starting" ]; then
        log_warning "Service is starting, health check in progress..."
        echo "Run './deploy.sh health' to check status"
    else
        log_warning "Service started but health status: $health_status"
        echo "Run './deploy.sh logs' to check for errors"
    fi
}

stop() {
    log_info "Stopping X1000.ai services..."
    docker compose -f $COMPOSE_FILE down
    log_success "Services stopped"
}

restart() {
    log_info "Restarting X1000.ai services..."
    stop
    start
}

logs() {
    log_info "Showing logs (Ctrl+C to exit)..."
    docker compose -f $COMPOSE_FILE logs -f
}

status() {
    log_info "Service Status:"
    echo ""
    docker compose -f $COMPOSE_FILE ps
    echo ""

    log_info "Resource Usage:"
    docker stats --no-stream --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}" | grep x1000 || echo "No running containers"
}

health() {
    log_info "Checking health..."

    health_status=$(docker inspect --format='{{.State.Health.Status}}' x1000_web 2>/dev/null || echo "container not found")
    echo -e "  Container Health: ${health_status}"

    if curl -sf http://localhost:3000/api/health > /dev/null 2>&1; then
        response=$(curl -s http://localhost:3000/api/health)
        echo -e "  HTTP Health Check: ${GREEN}OK${NC}"
        echo "  Response: $response" | head -c 200
        echo ""
    else
        echo -e "  HTTP Health Check: ${RED}FAILED${NC}"
    fi
}

compliance() {
    log_info "V5.3 Ecosystem Compliance Check..."
    echo ""

    memory_limit=$(docker inspect --format='{{.HostConfig.Memory}}' x1000_web 2>/dev/null || echo "0")
    if [ "$memory_limit" != "0" ]; then
        echo -e "  ✅ Memory limit configured: $(($memory_limit / 1024 / 1024))MB"
    else
        echo -e "  ❌ Memory limit NOT configured"
    fi

    restart_policy=$(docker inspect --format='{{.HostConfig.RestartPolicy.Name}}' x1000_web 2>/dev/null || echo "none")
    if [ "$restart_policy" = "unless-stopped" ] || [ "$restart_policy" = "always" ]; then
        echo -e "  ✅ Auto-restart enabled: $restart_policy"
    else
        echo -e "  ❌ Auto-restart NOT configured"
    fi

    health_test=$(docker inspect --format='{{.Config.Healthcheck.Test}}' x1000_web 2>/dev/null || echo "none")
    if [ "$health_test" != "none" ] && [ "$health_test" != "" ]; then
        echo -e "  ✅ Health check configured"
    else
        echo -e "  ❌ Health check NOT configured"
    fi

    log_driver=$(docker inspect --format='{{.HostConfig.LogConfig.Type}}' x1000_web 2>/dev/null || echo "none")
    echo -e "  ℹ️  Log driver: $log_driver"

    echo ""
    log_info "Compliance check complete"
}

clean() {
    log_warning "This will remove all containers, images, and volumes for X1000.ai"
    read -p "Are you sure? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        log_info "Cleaning up..."
        docker compose -f $COMPOSE_FILE down -v --rmi all
        log_success "Cleanup complete"
    else
        log_info "Cleanup cancelled"
    fi
}

show_banner

case "${1:-help}" in
    build) preflight_check; build ;;
    start) preflight_check; start ;;
    stop) stop ;;
    restart) preflight_check; restart ;;
    logs) logs ;;
    status) status ;;
    health) health ;;
    compliance) compliance ;;
    clean) clean ;;
    *)
        echo "Usage: $0 {build|start|stop|restart|logs|status|health|compliance|clean}"
        echo ""
        echo "Commands:"
        echo "  build       Build Docker images"
        echo "  start       Start all services"
        echo "  stop        Stop all services"
        echo "  restart     Restart all services"
        echo "  logs        Show service logs"
        echo "  status      Show service status and resource usage"
        echo "  health      Run health checks"
        echo "  compliance  Check V5.3 ecosystem compliance"
        echo "  clean       Remove all containers, images, and volumes"
        exit 1
        ;;
esac
