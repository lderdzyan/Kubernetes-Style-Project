output "repository_urls" {
  value = {
    for repo, r in aws_ecr_repository.ecr_repo :
    repo => r.repository_url
  }
}