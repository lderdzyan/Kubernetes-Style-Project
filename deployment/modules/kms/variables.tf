variable "project_name"{
  description = "Project Name"
  default     = "kubeproject"
  type        = string
}

variable "environment" {
  description = "Environment Name"
  type        = string
}

variable "deletion_window_in_days" {
  type    = number
  default = 7
}