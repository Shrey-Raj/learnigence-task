import React, { useState } from "react";
import { Space, Button, Typography, Flex, theme } from "antd";
import { LeftOutlined, PhoneFilled, UserOutlined } from "@ant-design/icons";
const AppHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const options = [
    { label: "Classroom", value: "classroom", icon: <UserOutlined /> },
    { label: "Whiteboard", value: "Whiteboard", icon: <UserOutlined /> },
    { label: "Videos", value: "Videos", icon: <UserOutlined /> },
    { label: "SlideShow", value: "Slideshow", icon: <UserOutlined /> },
    { label: "Documents", value: "Documents", icon: <UserOutlined /> },
    { label: "Doc.cam", value: "Doc.cam", icon: <UserOutlined /> },
  ];

  const [selectedButton, setSelectedButton] = useState("Videos");

  const handleClick = (value) => {
    setSelectedButton(value);
  };

  return (
    <>
      <div className="h-fit mt-3"
      // style={{ border: "2px solid red" }}
      >
        <Flex
          className=" w-full h-full "
          justify="space-between"
          // style={{ background: colorBgContainer }}
        >
          <Space className="">
            <Button className="" icon={<LeftOutlined />} />
            <Typography.Title level={4} className="mt-2 font-poppins">
              Basic Mathematics 101
            </Typography.Title>
          </Space>

          <Space>
            <Button size="large"
              className="border-none font-lato"
              icon={<PhoneFilled className="text-cyan-500 text-lg" />}
            >
              Call Teacher
            </Button>
            <Button
              className="border-none font-lato"
              icon={<UserOutlined className="text-orange-500 text-lg" />}
            >
              Support
            </Button>
          </Space>
        </Flex>

        <div className="capsule-button-group flex overflow-hidden bg-gray-200 rounded-full">
          {options.map((option) => (
            <Button
              key={option.value}
              onClick={() => handleClick(option.value)}
              className={`${
                selectedButton === option.value
                  ? "bg-white text-gray-800 transition duration-300"
                  : "bg-gray-200 border-none text-gray-600 transition duration-300"
              } flex-1 rounded-full m-1 flex items-center justify-center focus:outline-none py-4`}
            >
              {option.icon}
              <span className="ml-2">{option.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppHeader;
