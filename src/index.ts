export class Etherspay {
  private project_id: string;
  constructor(project_id: string) {
    this.project_id = project_id;
  }

  get_project_id(): string {
    return this.project_id;
  }
}
