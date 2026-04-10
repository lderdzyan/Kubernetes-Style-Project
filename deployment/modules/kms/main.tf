resource "aws_kms_key" "kms_key" {
  description             = "${var.project_name}-${var.environment}-kms-key"
  deletion_window_in_days = var.deletion_window_in_days

  enable_key_rotation = true

  tags = {
    Name        = "${var.project_name}-${var.environment}-kms"
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}
resource "aws_kms_alias" "kms_alias" {
  name          = "alias/${var.project_name}-${var.environment}"
  target_key_id = aws_kms_key.kms_key.key_id
}