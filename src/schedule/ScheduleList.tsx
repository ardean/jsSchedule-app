import * as React from "react";
import Layout from "../Layout";
import Schedule from "./Schedule";
import Head from "../components/Head";
import { AppState } from "../reducer";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import ScheduleEdit from "./ScheduleEdit";
import * as scheduleActions from "./scheduleActions";
import LoadingIndicator from "../components/LoadingIndicator";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Footer = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
`;

interface Props {
  schedules: Schedule[];
  loadingSchedules: boolean;
  loadSchedules(): Promise<void>;
  createSchedule(schedule: Schedule): Promise<void>;
  updateSchedule(schedule: Schedule): Promise<void>;
  removeSchedule(scheduleId: string): Promise<void>;
}

class ScheduleList extends React.Component<Props> {
  async componentDidMount() {
    await this.props.loadSchedules();
  }

  render() {
    const { schedules, loadingSchedules } = this.props;

    return (
      <Layout>
        <Container>
          <Head />
          {
            loadingSchedules && <LoadingIndicator />
          }
          {
            !loadingSchedules && schedules.map((schedule: Schedule) =>
              <ScheduleEdit key={schedule._id} schedule={schedule} onChange={this.onScheduleChange} onRemove={this.onScheduleRemove} />
            )
          }
          {
            !loadingSchedules && <Button onClick={this.onAddClick}>Add</Button>
          }
          <Footer>
            <Link to="/commands">Commands</Link>
          </Footer>
        </Container>
      </Layout>
    );
  }

  onAddClick = async () => {
    await this.props.createSchedule({
      action: "shutdown",
      interval: "daily",
      rule: {}
    });
  }

  onScheduleChange = async (schedule: Schedule) => {
    await this.props.updateSchedule(schedule);
  }

  onScheduleRemove = async (schedule: Schedule) => {
    await this.props.removeSchedule(schedule._id);
  }
}

const mapStateToProps = (state: AppState) => ({
  schedules: state.schedules,
  loadingSchedules: state.loadingSchedules
});

const mapDispatchToProps = (dispatch) => ({
  loadSchedules: () => dispatch(scheduleActions.load()),
  createSchedule: (schedule: Schedule) => dispatch(scheduleActions.create(schedule)),
  updateSchedule: (schedule: Schedule) => dispatch(scheduleActions.update(schedule)),
  removeSchedule: (scheduleId: string) => dispatch(scheduleActions.remove(scheduleId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleList);