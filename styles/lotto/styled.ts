import { FlexDiv } from "../styled"
import styled from "styled-components"

export const LotteryContainer = styled.div`
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  background-color: #f1f2f6;
  width: 150px;
  height: 150px;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0.07);

  img {
    filter: grayscale(1);
    max-width: 100%;
  }

  &:hover {
    width: 250px;
    height: 250px;
    box-shadow: 0 10px 30px rgba(0, 0, 0.1);
    cursor: pointer;

    img {
      filter: grayscale(0);
    }
  }
`

export const BallsContainer = styled(FlexDiv)`
  height: 120px;
  padding: 10px 15px;
  background: rgba(207, 207, 207, 1);
  background: -moz-linear-gradient(
    left,
    rgba(207, 207, 207, 1) 0%,
    rgba(247, 247, 247, 1) 72%,
    rgba(232, 232, 232, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(207, 207, 207, 1)),
    color-stop(72%, rgba(247, 247, 247, 1)),
    color-stop(100%, rgba(232, 232, 232, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(207, 207, 207, 1) 0%,
    rgba(247, 247, 247, 1) 72%,
    rgba(232, 232, 232, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(207, 207, 207, 1) 0%,
    rgba(247, 247, 247, 1) 72%,
    rgba(232, 232, 232, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(207, 207, 207, 1) 0%,
    rgba(247, 247, 247, 1) 72%,
    rgba(232, 232, 232, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(207, 207, 207, 1) 0%,
    rgba(247, 247, 247, 1) 72%,
    rgba(232, 232, 232, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cfcfcf', endColorstr='#e8e8e8', GradientType=1 );
  border-radius: 99px 99px 99px 99px;
  -moz-border-radius: 99px 99px 99px 99px;
  -webkit-border-radius: 99px 99px 99px 99px;
  border: 10px solid #1f1f1f;
`
export const onClickLotteryStyle = {
  top: "10%",
  transform: "scale(0.5)",
}
