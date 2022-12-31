import React from "react";

export function makeEditable(e) {
    e.target.select();
    e.target.classList.add("edit");
  }

export function updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }