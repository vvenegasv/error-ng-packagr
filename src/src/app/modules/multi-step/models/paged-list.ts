export class PagedList<TModel> {
  public currentPage: number;
  public pageSize: number;
  public totalElements: number;
  public totalPages: number;
  public items: TModel[];
}
