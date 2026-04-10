# Kubernetes Style Project

Terraform-based infrastructure for deploying a containerized application on AWS EKS, with GitHub Actions pipelines for CI/CD.

## Repository Structure

```
.
├── .github/
│   └── workflows/
│       ├── deploy-infrastructure.yaml
│       ├── destroy-infrastructure.yaml
│       ├── build-frontend.yaml
│       └── build-backend.yaml
├── helm/
│    ├── backend/
│    ├── frontend/
│    └── database/
├── code/
│   ├── backend/
│   └── frontend/
├── deployment/
│   ├── modules/
│   │   ├── ecr/
│   │   ├── eks/
│   │   ├── images/
│   │   ├── kms/
│   │   └── vpc/
│   ├── backend.tf
│   ├── main.tf
│   ├── provider.tf
│   └── variables.tf
└── README.md
```

## Before We Begin

Two things must be set up manually once per environment before running any pipelines or Terraform.

### 1. Create the Terraform State Bucket


### 2. Create the GitHub OIDC Role


## Terraform Modules

| Module | Description |
|--------|-------------|
| `vpc` | VPC, public/private subnets, Internet Gateway, NAT Gateway, route tables |
| `eks` | EKS cluster and managed node groups |
| `ecr` | Container registry for backend and frontend images |
| `kms` | Encryption keys for EKS secrets |
| `images` | AMI and image configuration |

## GitHub Actions Secrets

| Secret | Description |
|--------|-------------|
| `AWS_FED_ROLE_ARN` | IAM role ARN for OIDC auth |
| `AWS_REGION` | Target AWS region |
| `TF_STATE_BUCKET` | S3 bucket for Terraform state |

## Environments

Infrastructure is deployed across three separate AWS accounts: `dev`, `staging`, and `prod`.