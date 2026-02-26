import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import leetcodeLogo from "../../assets/images/leetcode_logo.png";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  svg {
    background-color: ${(props) => props.backgroundColor};
    fill: white;
    width: 20px;
    height: 20px;
    padding: 13px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover i,
  &:hover svg {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

// LeetCode custom logo
const LeetCodeImg = () => (
  <img
    src={leetcodeLogo}
    alt="LeetCode"
    style={{
      width: "46px",
      height: "46px",
      borderRadius: "50%",
      objectFit: "cover",
      display: "block",
    }}
  />
);

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              {media.name === "LeetCode" ? (
                <LeetCodeImg />
              ) : (
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              )}
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
