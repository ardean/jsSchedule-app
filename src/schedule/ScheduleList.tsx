import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "src/reducer";
import styled from "styled-components";
import Layout from "src/Layout";
import Schedule from "./Schedule";
import * as actions from "./actions";
import ScheduleEdit from "./ScheduleEdit";
import Button from "src/components/Button";
import LoadingIndicator from "src/components/LoadingIndicator";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.a`
  margin: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 600;
  font-size: 36px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Flex = styled.div`
  flex: 1;
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
          <Row>
            <Title href="https://github.com/ardean/jsSchedule">jsSchedule</Title>
            <Flex />
          </Row>
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
  loadSchedules: () => dispatch(actions.load()),
  createSchedule: (schedule: Schedule) => dispatch(actions.create(schedule)),
  updateSchedule: (schedule: Schedule) => dispatch(actions.update(schedule)),
  removeSchedule: (scheduleId: string) => dispatch(actions.remove(scheduleId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleList);