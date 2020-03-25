import React from "react";
import { Row, Col, Card, Container } from "reactstrap";
import { useUsers } from "../../Hooks/useUsers";

export interface UsersProps {}

const Users: React.SFC<UsersProps> = () => {
  const { isLoading, users } = useUsers();

  if (isLoading) {
    return (
      <Container>
        <Col xs={3}>
          <Card>Preparing your Data...</Card>;
        </Col>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Row>
            {users &&
              users.map((user: any) => (
                <Col className=" mb-3" xs={12} md={4}>
                  <Card className="highlightOnHover py-3 px-3 mb-3">
                    <p>
                      <b>ID: </b>
                      {user.id}
                    </p>
                    <p>
                      <b>Name: </b>
                      {user.name}
                    </p>
                    <p>
                      <b>UserName:</b>
                      {user.username}
                    </p>
                    <p>
                      <b>Email: </b>
                      {user.email}
                    </p>
                    <p>
                      <b>Address: </b>
                      <br />
                      {user.address.street}
                      <br />
                      {user.address.suite}
                      <br />
                      {user.address.city}
                      <br />
                      {user.address.zipcode}
                    </p>
                    <p>
                      <b>Phone: </b>
                      {user.phone}
                    </p>
                    <p>
                      <b>Website: </b>
                      {user.website}
                    </p>
                    <p>
                      <b>Company: </b>
                      <br />
                      {user.company.name}
                      <br />
                      {user.company.catchPhrase}
                      <br />
                      {user.company.bs}
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

export default Users;
