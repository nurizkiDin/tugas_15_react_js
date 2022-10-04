import { 
  Comment,
  Container, Table, Menu, Input,
  Feed, Icon, Label, Grid, Image,
  Header, Form, Button 
} from "semantic-ui-react";

function App() {
  return (
    <Container>
      <br/>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2">
              <Menu floated="right">
                <Input icon="search" placeholder="Search document..."/>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.HeaderCell>Nama Document</Table.HeaderCell>
            <Table.HeaderCell>Jenis File</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Panduan Belajar Javascript</Label>
            </Table.Cell>
            <Table.Cell>PDF</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Panduan Belajar CSS</Table.Cell>
            <Table.Cell>PDF</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Panduan Belajar React JS</Table.Cell>
            <Table.Cell>PDF</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Comment.Group threaded>
              <Header as='h3' dividing>
                Komentar
              </Header>

              <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Satria</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>Hallo..!</Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Danang</Comment.Author>
                  <Comment.Metadata>
                    <span>Today at 5:50PM</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>Kerjakan Sesuatu Semampu Kamu..</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                    <Comment.Content>
                      <Comment.Author as='a'>Ricky</Comment.Author>
                      <Comment.Metadata>
                        <span>Just now</span>
                      </Comment.Metadata>
                      <Comment.Text>Kamu sekarang dimana Danang?</Comment.Text>
                      <Comment.Actions>
                        <a href="/">Reply</a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Joe</Comment.Author>
                  <Comment.Metadata>
                    <span>1 day ago</span>
                  </Comment.Metadata>
                  <Comment.Text>Terimakasih Atas Nasihat Nya</Comment.Text>
                  <Comment.Actions>
                    <a href="/">Reply</a>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply style={{width: "400px"}}>
                <Form.TextArea style={{minHeight: "100px"}}/>
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
          </Grid.Column>
          <Grid.Column width={6}>
            <Feed size='large'>
              <Feed.Event>
                <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>3 Hours Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label icon='pencil' />
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                    Saya Senang Belajar Bahasa Pemrograman
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>11 Likes</Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/justen.jpg" />
                <Feed.Content>
                  <Feed.Date>4 days ago</Feed.Date>
                  <Feed.Summary>
                    David added 2 new Image
                  </Feed.Summary>
                  <Feed.Extra images>
                    <a href="/">
                      <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
                    </a>
                    <a href="/">
                      <Image src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png" />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />2 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
