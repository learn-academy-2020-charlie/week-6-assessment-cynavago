# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# $ rails g controller blog_posts

# 1) After we generate a controller, a class is created inside the controller file for Blog Posts. The controller class inherits from ApplicationController. 
class BlogPostsController < ApplicationController
  def index
    # 2) Defined a method called index that creates an instance variable of @posts that gets all of the Blog Posts that have been created in the database.
    @posts = BlogPost.all
  end

  def show
    # 3) Defined a show method that creates an instance  variable of @blog, which will show a specific blog post when searched for in the URL with its assigned id. Example: localhost:3000/blog_posts/3
    @post = BlogPost.find(params[:id])
  end

  # 4) The new method creates an object instance that is empty. If a user goes to clients/new in the application to add a new blog, Rails will create an instance of Blog_Posts and run the new method. Handles only get requests. Does not create/post anything. Represents a midway point between Create and Read. Rails convention that displays a form to the user.
  def new
  end

  def edit
  end

  def create
    # 5) The create method is able to create a new blog post by using the HTTP verb POST. You must include the blog post params when creating a new blog post. If the params pass, then a new blog post is created. If not, it calls in the def new method (line 23) which displays a form to the user.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) Redirects the browser to that specific blog post URL. The blog_post_path is a route that returns back to the blog post page.
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Private creates methods that are internal use only, used within the class definition. 
  private
  def blog_post_params
    # 8) Here we defined the parameters for blog_post which restricts users to only be able to access the columns we allow them to. In this case, we allow them to create, edit, destory the title and content of a blog post which are the columns in the Model Blog_Post.
    params.permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) Inside the Model file for Blog_post, that inherits from ApplicationController. 
class BlogPost < ApplicationRecord
  # 10) This means that the model Blog_Post has many comments, meaning that the Model Comments holds a foreign key. Comments belongs_to BlogPost. They are in relationship to each other. 
  has_many :comments
end
