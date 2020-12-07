class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  # , :check_authorization!
  # rescue_from User::NotAuthorized, with: :user_not_authorized

  def index
    @articles = Article.all
  end

  def show
  end

  def new
    @article = Article.new
  end

  def edit
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article, notice: 'Article was successfully created.'
    else
      render :new
    end
  end

  def update
    if @article.update(article_params)
      redirect_to @article, notice: 'Article was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @article.destroy
    redirect_to articles_url, notice: 'Article was successfully destroyed.'
  end

  private
    def set_article
      @article = Article.find(params[:id])
    end

    def article_params
      params.require(:article).permit(:title, :rich_body, :date, :photo)
    end

    # def check_authorization!
    #   rescue_from User::NotAuthorized unless current_user.admin?
    # end

    # def user_not_authorized
    #   flash[:error] = "Vous n'avez pas l'accès à cette section."
    #   redirect_back(fallback_location: root_path)
    # end
end
