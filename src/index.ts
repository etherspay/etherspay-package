export class Etherspay {
  private props = { project_id: 'null', project_secret: 'null' };

  constructor({
    project_id,
    project_secret,
  }: {
    project_id: string;
    project_secret: string;
  }) {
    this.props.project_id = project_id;
    this.props.project_secret = project_secret;
  }

  get_project_id(): string {
    return this.props.project_id;
  }
}
