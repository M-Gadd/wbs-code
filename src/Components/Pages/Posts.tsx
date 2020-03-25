import { Row, Col, Card, Container } from "reactstrap";
import React from "react";
import { usePosts } from "../../Hooks/usePosts";

export interface PostsProps {}

const Posts: React.SFC<PostsProps> = () => {
  const { isLoading, posts } = usePosts();

  if (isLoading) {
    return (
      <Container>
        <Col className="justify-content-center" xs={12}>
          <Card className="px-3 py-3">Preparing your Data...</Card>;
        </Col>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col className="mb-3" xs={12}>
          <Row>
            {posts &&
              posts.map((post: any) => (
                <Col xs={12} md={4}>
                  <Card className="highlightOnHover py-3 px-3 mb-3">
                    <p>
                      <b>User ID:</b> {post.userId}
                    </p>
                    <p>
                      <b>ID: </b> {post.id}
                    </p>
                    <p>
                      <b>Title: </b> {post.title}
                    </p>
                    <p>
                      <b>Body: </b> {post.body}
                    </p>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
      <style>{`
        .highlightOnHover:hover,
        .highlightOnHover:focus {
          cursor: pointer;
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease-out;
        }
      `}</style>
    </Container>
  );
};

export default Posts;
