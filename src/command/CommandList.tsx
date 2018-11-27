import * as React from "react";
import Layout from "../Layout";
import Head from "../components/Head";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import * as commandActions from "./commandActions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Row = styled.div`
  padding: 5px 0;
`;

interface Props {
  shutdown(): Promise<void>;
  reboot(): Promise<void>;
}

class CommandList extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <Container>
          <Head />
          <Row>
            <Button onClick={this.onShutdownClick}>Shutdown</Button>
          </Row>
          <Row>
            <Button onClick={this.onRebootClick}>Reboot</Button>
          </Row>
        </Container>
      </Layout>
    );
  }

  onShutdownClick = async () => {
    if (!confirm("shutdown system?")) return;
    await this.props.shutdown();
  }

  onRebootClick = async () => {
    if (!confirm("reboot system?")) return;
    await this.props.reboot();
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  shutdown: () => dispatch(commandActions.shutdown()),
  reboot: () => dispatch(commandActions.reboot())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandList);