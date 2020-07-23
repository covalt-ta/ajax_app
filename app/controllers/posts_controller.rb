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

  def checked
    post = Post.find(params[:id])
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end

    item = Post.find(params[:id])
    render joson: { post: item }
  end
end
