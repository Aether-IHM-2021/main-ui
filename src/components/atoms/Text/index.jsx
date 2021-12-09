import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import defaultTextStyle from "@/components/atoms/defaultTextStyle";

const Text = styled.p`
  ${defaultTextStyle}

  ${({ variant }) =>
    ({
      h1: css`
        font-size: 3em;
        letter-spacing: -2%;
        font-weight: bold;
      `,
      h2: css`
        font-size: 2.25em;
        letter-spacing: -2%;
        font-weight: bold;
      `,
      h3: css`
        font-size: 1.5em;
        letter-spacing: -2%;
        font-weight: bold;
      `,
      subheading: css`
        font-size: 1.5em;
      `,
      title: css`
        font-size: 1.125em;
        font-weight: 600;
      `,
      titleWide: css`
        font-size: 1.125em;
        font-weight: 600;
        letter-spacing: 1.5px;
      `,
      body1: css`
        font-size: 1em;
      `,
      body2: css`
        font-size: 0.875em;
      `,
      tag: css`
        font-size: 0.75em;
      `,
    }[variant])}
        
    font-weight: ${({ weight }) => weight};
`;

Text.defaultProps = {
  variant: "body1",
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "subheading",
    "title",
    "titleWide",
    "body1",
    "body2",
    "tag",
  ]),
  weight: PropTypes.string,
};

/** @component */
export default Text;
