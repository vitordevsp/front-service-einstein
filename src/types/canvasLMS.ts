export interface IUserCanvasLMS {
  id: number
  name: string
  sortable_name: string
  last_name: string
  first_name: string
  short_name: string
  sis_user_id: string
  sis_import_id: number
  integration_id: string
  login_id: string
  avatar_url: string
  avatar_state: string
  enrollments: string[]
  email: string
  locale: string
  last_login: string
  time_zone: string
  bio: string
  permissions: {
    can_update_name: boolean
    can_update_avatar: boolean
    limit_parent_app_web_access: boolean
  }
}

export interface ICourseCanvasLMS {
  id: number
  sis_course_id: string
  uuid: string
  integration_id: string
  sis_import_id: number
  name: string
  course_code: string
  original_name: string
  workflow_state: string
  account_id: number
  root_account_id: number
  enrollment_term_id: number
  grading_periods: string[]
  grading_standard_id: number
  grade_passback_setting: string
  created_at: string
  start_at: string
  end_at: string
  locale: string
  enrollments: string[]
  total_students: number
  calendar: {
    ics: string
  }
  default_view: string
  syllabus_body: string
  needs_grading_count: number
  term: {
    id: number
    name: string
    start_at: string
    end_at: string
  }

  course_progress: {
    requirement_count: number
    requirement_completed_count: number
    next_requirement_url: string
    completed_at: string
  }
  apply_assignment_group_weights: boolean
  permissions: string
  is_public: boolean
  is_public_to_auth_users: boolean
  public_syllabus: boolean
  public_syllabus_to_auth: boolean
  public_description: string
  storage_quota_mb: number
  storage_quota_used_mb: number
  hide_final_grades: boolean
  license: string
  allow_student_assignment_edits: boolean
  allow_wiki_comments: boolean
  allow_student_forum_attachments: boolean
  open_enrollment: boolean
  self_enrollment: boolean
  restrict_enrollments_to_course_dates: boolean
  course_format: string
  access_restricted_by_date: boolean
  time_zone: string
  blueprint: boolean
  blueprint_restrictions: string
  blueprint_restrictions_by_object_type: string
  template: boolean
}
