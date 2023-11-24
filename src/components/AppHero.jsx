import React from "react";
import { Button, Card, Flex, Space } from "antd";
import {VideoCameraOutlined,SoundOutlined,ShareAltOutlined,WechatOutlined,LogoutOutlined} from '@ant-design/icons' ; 

const AppHero = () => {
  const name = "alt name";
  const imageUrl = "https://picsum.photos/400/300";
  const imageUrl2 = "https://picsum.photos/300";
  const embedUrl = 'https://youtu.be/n0FZhQ_GkKw?feature=shared' ; 

  return (
    <>
      <div
        className="w-full h-fit bg-transparent flex mt-8 mb-8"
        // style={{
        //   border: "2px solid red",
        // }}
      >
        <Flex
          vertical
          style={{
            // border: "2px solid blue",
            width: "fit-content",
          }}
        >
          <Card className="m-2 w-fit p-1 overflow-hidden border-none" >
            <div className="relative overflow-hidden">
              <img
                alt={name}
                src={imageUrl2}
                className="h-40 object-cover rounded-3xl"
              />

              <div className="absolute inset-0 flex items-end p-2">
                <div className="bg-white text-black p-2 rounded-r-xl rounded-bl-3xl absolute left-0 bottom-0 font-semibold">
                  Ridha
                </div>
              </div>
            </div>
          </Card>

          <Card className="m-2 w-fit p-1 overflow-hidden border-none" >
            <div className="relative overflow-hidden">
              <img
                alt={name}
                src={imageUrl}
                className="h-40 object-cover rounded-3xl"
              />

              <div className="absolute inset-0 flex items-end p-2">
                <div className="bg-white text-black p-2 rounded-r-xl rounded-bl-3xl absolute left-0 bottom-0 font-semibold">
                  Ms. Kaur
                </div>
              </div>
            </div>
          </Card>
          
        <Space className="flex justify-center items-center flex-wrap w-3/4 mt-5 mx-auto" style={{
            // border:"2px solid red"
        }}>
            <Flex vertical className="w-3/4 mr-2 " justify="space-between" align="items">
                <Button className="bg-gray-100" size="large" icon={<VideoCameraOutlined />} />
                <div className="text-center text-xs">Cam</div>
            </Flex>

            <Flex vertical className="w-3/4 mr-2 ">
                <Button className="bg-gray-100" size="large" icon={<SoundOutlined />} />
                <div className="text-center text-xs">Mic</div>
            </Flex>

            <Flex vertical className="w-3/4 mr-2 ">
                <Button className="bg-gray-100" size="large" icon={<ShareAltOutlined />} />
                <div className="text-center text-xs">Share</div>
            </Flex>

            <Flex vertical className="w-3/4 mr-2 "><Button className="bg-gray-100" size="large" icon={<WechatOutlined />}/><div className="text-center text-xs">Chat</div></Flex>

            <Flex vertical className="w-3/4 mr-2 "><Button className="bg-cyan-500" size="large" icon={<LogoutOutlined />}/><div className="text-center text-xs">Leave</div></Flex>

        </Space>


        </Flex>


 <Card className="embed-card w-full h-96  my-auto rounded-md">
 <iframe className="embed-iframe w-full h-96" src="https://www.youtube.com/embed/n0FZhQ_GkKw?si=wEzmtOXGtu4ts9_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Card>

      </div>
    </>
  );
};

export default AppHero;
