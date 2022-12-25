import moment from "moment";

interface BlogPostProps {
  post: Post;
}

interface Post {
  title: string;
  pubDate?: string;
  link: string;
  thumbnail: string;
  description: string;
  categories?: string[];
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className="work__box">
      <div className="work__text">
        <h3>{post.title}</h3>
        <h4>{moment(post.pubDate).format("MMMM Do YYYY")}</h4>
        {/* <p>{post.description}</p> */}
        <div>
          <p>
            Categories:{" "}
            {post.categories?.map((cat) => (
              <>
                <a
                  href={`https://medium.com/tag/${cat}`}
                  target="_blank"
                  className="link__text"
                  style={{ borderBottom: "none" }}
                >
                  {cat}
                </a>
                ,
              </>
            ))}
          </p>
        </div>
        <div className="work__links">
          <a href={post.link} target="_blank" className="link__text">
            Read More <span>&rarr;</span>
          </a>
        </div>
      </div>
      <div className="work__image-box">
        <img
          width="600px"
          src={post.thumbnail}
          className="work__image"
          alt={`${post.title}_thumbnail`}
        />
      </div>
    </div>
  );
};

export default BlogPost;
