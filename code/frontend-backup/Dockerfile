# Stage 1: Build the application
FROM node:22-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the application
RUN pnpm run build

# Stage 2: Production runtime
FROM node:22-alpine AS runner

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy built application from builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/static ./static
COPY --from=builder /app/package.json ./

# Expose port (default 3008, can be overridden via PORT env var)
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production
ENV PORT=3000
ENV PUBLIC_BASE_URL=http://195.250.79.137:3010

# Run the production server
CMD ["node", "build/index.js"]

