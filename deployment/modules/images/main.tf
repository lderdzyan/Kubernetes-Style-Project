resource "aws_s3_bucket" "bucket" {
  bucket = "${var.project_name}-${var.environment}-images"

  tags = {
    Name        = "${var.project_name}-images"
    Environment = var.environment
  }
}
resource "aws_s3_bucket" "bucket" {
  bucket = "${var.project_name}-${var.environment}-images"

  tags = {
    Name        = "${var.project_name}-images"
    Environment = var.environment
  }
}
resource "aws_iam_policy" "s3_access" {
  name = "${var.project_name}-${var.environment}-s3-access"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect = "Allow",
      Action = [
        "s3:PutObject",
        "s3:GetObject"
      ],
      Resource = "${aws_s3_bucket.bucket.arn}/*"
    }]
  })
}