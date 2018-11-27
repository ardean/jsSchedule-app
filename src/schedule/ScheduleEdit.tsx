import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Select from "../components/Select";
import TextInput from "../components/TextInput";
import NumberInput from "../components/NumberInput";
import Schedule, { Action, Interval } from "./Schedule";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  &>*:first-child {
    margin-bottom: 5px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
const Label = styled.label`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`;

const TitleTextInput = styled(TextInput)`
  flex: 1;
  padding: 10px 0;
  border: 0;
  outline: none;
  font-size: 22px;
  font-weight: 600;
`;

interface Props {
  schedule: Schedule;
  onChange(schedule: Schedule): void;
  onRemove(schedule: Schedule): void;
}

export default class ScheduleEdit extends React.Component<Props> {
  render() {
    const { schedule } = this.props;
    return (
      <Container>
        <Col>
          <Row>
            <TitleTextInput onChange={this.onNameChange} value={schedule.name} placeholder={`#${schedule._id}`} style={{ marginRight: "10px" }} />
            <Button onClick={this.onRemoveClick}>Remove</Button>
          </Row>
        </Col>

        <Col>
          <Label>action</Label>
          <Select onChange={this.onActionChange} value={schedule.action}>
            <option value="shutdown">Shutdown</option>
            <option value="reboot">Reboot</option>
            <option value="execute">Execute Command</option>
          </Select>
        </Col>
        {
          schedule.action === "execute" && <Col>
            <Label>execute</Label>
            <TextInput onChange={this.onExecuteChange} value={schedule.execute} />
          </Col>
        }

        <Col>
          <Label>interval</Label>
          <Select onChange={this.onIntervalChange} value={schedule.interval}>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </Col>

        {
          (
            schedule.interval === "daily" ||
            schedule.interval === "weekly" ||
            schedule.interval === "monthly" ||
            schedule.interval === "yearly"
          ) && <Col>
            <Label>hour</Label>
            <NumberInput onChange={this.onHourChange} value={schedule.rule.hour} min={0} max={23} />
          </Col>
        }
        <Col>
          <Label>minute</Label>
          <NumberInput onChange={this.onMinuteChange} value={schedule.rule.minute} min={0} max={59} />
        </Col>

        {
          (
            schedule.interval === "weekly"
          ) && <Col>
            <Label>day of week</Label>
            <Select onChange={this.onDayOfWeekChange} value={schedule.rule.dayOfWeek}>
              <option value="1">Monday</option>
              <option value="2">Thuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="7">Sunday</option>
            </Select>
          </Col>
        }
        {
          (
            schedule.interval === "monthly" ||
            schedule.interval === "yearly"
          ) && <Col>
            <Label>day of month</Label>
            <Select onChange={this.onDateChange} value={schedule.rule.date}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </Select>
          </Col>
        }
        {
          (
            schedule.interval === "yearly"
          ) && <Col>
            <Label>month</Label>
            <Select onChange={this.onMonthChange} value={schedule.rule.month}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Select>
          </Col>
        }
      </Container>
    );
  }

  onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { schedule } = this.props;

    this.props.onChange({
      ...schedule,
      name: e.currentTarget.value
    });
  }

  onActionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { schedule } = this.props;

    this.props.onChange({
      ...schedule,
      action: e.currentTarget.value as Action
    });
  }

  onExecuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { schedule } = this.props;

    const execute = e.currentTarget.value;

    this.props.onChange({
      ...schedule,
      execute
    });
  }

  onIntervalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { schedule } = this.props;

    this.props.onChange({
      ...schedule,
      interval: e.currentTarget.value as Interval
    });
  }

  onHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { schedule } = this.props;

    this.props.onChange({
      ...schedule,
      rule: {
        ...schedule.rule,
        hour: parseInt(e.currentTarget.value, 10)
      }
    });
  }

  onMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { schedule } = this.props;

    this.props.onChange({
      ...schedule,
      rule: {
        ...schedule.rule,
        minute: parseInt(e.currentTarget.value, 10)
      }
    });
  }

  onDayOfWeekChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { schedule } = this.props;

    this.props.onChange({
      ...schedule,
      rule: {
        ...schedule.rule,
        dayOfWeek: parseInt(e.currentTarget.value, 10)
      }
    });
  }

  onDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { schedule } = this.props;

    this.props.onChange({
      ...schedule,
      rule: {
        ...schedule.rule,
        date: parseInt(e.currentTarget.value, 10)
      }
    });
  }

  onMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { schedule } = this.props;

    this.props.onChange({
      ...schedule,
      rule: {
        ...schedule.rule,
        month: parseInt(e.currentTarget.value, 10)
      }
    });
  }

  onRemoveClick = () => {
    if (!confirm("remove scheduled item?")) return;

    const { schedule } = this.props;

    this.props.onRemove(schedule);
  }
}