"use client";

import styled from "@emotion/styled";
import Link from "next/link";

export const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.02em;
  color: var(--text-primary);
  transition: all 0.3s ease;
  position: relative;
  text-decoration: none;

  &:hover {
    color: #ffffff; // hover 時變純白
    transform: translateY(-1px);
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  }

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 50%;
    background-color: #94a3b8; // 底線顏色改為淺灰藍
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover:after {
    width: 100%;
    background-color: #cbd5e1; // hover 時底線變更淺
  }
`;
