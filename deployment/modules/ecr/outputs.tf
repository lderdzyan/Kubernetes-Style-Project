output "repository_urls" {
  value = {
    for repo, r in aws_ecr_repository.repos :
    repo => r.repository_url
  }
}