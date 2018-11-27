import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";

const Title = styled(Link)`
  margin: 0;
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
  font-size: 36px;
`;

const Flex = styled.div`
  flex: 1;
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const GithubLink = styled.a.attrs({ href: "https://github.com/ardean/jsSchedule" })`
  color: #222;
  height: 41px;
  line-height: 41px;
  transition: color 0.33s ease;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export default class Head extends React.Component {
  render() {
    return (
      <Toolbar>
        <Title to="/">jsSchedule</Title>
        <Flex />
        <GithubLink>
          <IoLogoGithub size="41px" />
        </GithubLink>
      </Toolbar>
    );
  }
}