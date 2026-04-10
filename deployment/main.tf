module "vpc" {
  source = "./modules/vpc"

  project_name = var.project_name
  environment  = var.environment

  azs = ["eu-north-1a", "eu-north-1b"]

  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets = ["10.0.101.0/24", "10.0.102.0/24"]
}

module "eks" {
  source = "./modules/eks"

  project_name = var.project_name
  environment  = var.environment

  vpc_id          = module.vpc.vpc_id
  private_subnets = module.vpc.private_subnets
  public_subnets  = module.vpc.public_subnets
}

module "ecr" {
  source = "./modules/ecr"

  project_name = var.project_name
  environment  = var.environment

  repositories = ["backend", "frontend"]
}