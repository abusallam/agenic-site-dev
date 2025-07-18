# Coolify Deployment Guide

This guide covers deploying the Main Consulting website to Coolify with the domain `main.consulting.sa`.

## 🚀 Quick Deployment

### Prerequisites
- Coolify instance running
- Domain `main.consulting.sa` pointing to your Coolify server
- SSL certificate configured (Let's Encrypt recommended)

### Deployment Steps

1. **Create New Application in Coolify**
   - Go to your Coolify dashboard
   - Click "New Application"
   - Select "Docker Compose" as deployment type

2. **Configure Repository**
   - Repository URL: `https://github.com/abusallam/agentic-site.git`
   - Branch: `main`
   - Build Pack: `Docker Compose`

3. **Set Environment Variables**
   ```env
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   NEXT_PUBLIC_SITE_URL=https://main.consulting.sa
   NEXT_PUBLIC_CONTACT_EMAIL=asim@main.consulting.sa
   
   # Optional: Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   
   # Optional: Analytics
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

4. **Configure Domain**
   - Domain: `main.consulting.sa`
   - Enable SSL: Yes (Let's Encrypt)
   - Port: 3000

5. **Deploy**
   - Click "Deploy"
   - Monitor deployment logs
   - Verify health check at `/api/health`

## 🔧 Configuration Files

### Docker Compose
The project includes a Coolify-optimized docker-compose file at `.coolify/docker-compose.yml`:

```yaml
version: '3.8'
services:
  main-consulting:
    build: 
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_TELEMETRY_DISABLED=1
    restart: unless-stopped
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:3000/api/health || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

### Dockerfile
Multi-stage production build optimized for performance:
- Node.js 18 Alpine base image
- Optimized layer caching
- Non-root user for security
- Health check included
- Standalone output for minimal image size

## 🌐 Domain Configuration

### DNS Settings
Ensure your domain `main.consulting.sa` has the following DNS records:
```
A     main.consulting.sa     -> YOUR_COOLIFY_SERVER_IP
AAAA  main.consulting.sa     -> YOUR_COOLIFY_SERVER_IPv6 (if available)
```

### SSL Certificate
Coolify will automatically provision SSL certificates via Let's Encrypt when:
- Domain is properly configured
- DNS is pointing to your server
- Port 80 and 443 are accessible

## 📊 Monitoring & Health Checks

### Health Check Endpoint
The application includes a health check at `/api/health`:
```json
{
  "status": "healthy",
  "timestamp": "2025-01-18T10:00:00.000Z",
  "service": "main-consulting-website"
}
```

### Monitoring
- **Health Checks**: Automatic every 30 seconds
- **Restart Policy**: Unless stopped
- **Logs**: Available in Coolify dashboard
- **Metrics**: CPU, Memory, Network usage

## 🔒 Security Features

### Production Security
- Security headers configured
- CSP (Content Security Policy) enabled
- XSS protection
- Frame options set to DENY
- HTTPS redirect enforced

### Environment Security
- Sensitive data via environment variables
- No secrets in code
- Production-only configurations

## 🚀 Performance Optimizations

### Build Optimizations
- Multi-stage Docker build
- Standalone Next.js output
- Optimized dependencies
- Image compression and optimization

### Runtime Performance
- Static asset caching (1 year)
- API response caching
- Gzip/Brotli compression
- CDN-ready configuration

## 🔄 Deployment Workflow

### Automatic Deployment
1. Push changes to `main` branch
2. Coolify detects changes via webhook
3. Automatic build and deployment
4. Health check verification
5. Traffic routing to new version

### Manual Deployment
1. Go to Coolify dashboard
2. Select your application
3. Click "Deploy"
4. Monitor deployment progress

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build logs in Coolify
   # Verify environment variables
   # Ensure dependencies are up to date
   ```

2. **Health Check Failures**
   ```bash
   # Verify /api/health endpoint
   # Check application logs
   # Verify port 3000 is accessible
   ```

3. **Domain Issues**
   ```bash
   # Verify DNS configuration
   # Check SSL certificate status
   # Ensure domain points to correct IP
   ```

### Log Access
- **Application Logs**: Coolify Dashboard > Your App > Logs
- **Build Logs**: Available during deployment
- **System Logs**: Server-level monitoring

## 📞 Support

### Deployment Support
- **Technical Issues**: Check Coolify documentation
- **Application Issues**: asim@main.consulting.sa
- **Domain Issues**: Verify DNS and SSL configuration

### Resources
- [Coolify Documentation](https://coolify.io/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

---

**Deployment Status**: ✅ Ready for Production
**Last Updated**: January 18, 2025