class PostsController < ApplicationController

  def index
    @post = Post.new
    @posts = Post.all.order(id: "DESC")
  end

  def new
  end

  def create
    Post.create(content: params[:post][:content])
    redirect_to action: :index
  end

end
