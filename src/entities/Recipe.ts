export class Recipe {
  constructor(
    private title: string,
    private description: string,
    private serving_size: number,
    private preparation_time: string
  ) {
    this.title = title;
    this.description = description;
    this.serving_size = serving_size;
    this.preparation_time = preparation_time;
  }
}
