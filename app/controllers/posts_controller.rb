class PostsController < ApplicationController
  def index
    @post = Post.new
    @posts = Post.all.order(id: "DESC")
  end

  def new
  end

  def create
    post = Post.create(content: params[:post][:content], chacked: false)
    render json: { post: post}
  end

  def checked
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
      render json: { post: post }
    else
      post.update(checked: true)
      render json: { post: post }
    end
    # item = Post.find(params[:id])
    # render json: { item: item }
  end
end
