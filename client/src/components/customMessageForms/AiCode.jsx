import React, { useState } from 'react';
import MessageFormUI from './MessageFormUI';
import { usePostAiCodeMutation } from '../../state/api';

const AiCode = ({ props, activeChat }) => {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState('');
  const [triggerCode] = usePostAiCodeMutation();

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', `${Math.floor(Math.random() * 1000)}+00:00`);

    const attach = attachment
      ? [{ blob: attachment, file: attachment.name }]
      : [];

    const form = {
      attachments: attach,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id,
    };

    props.onSubmit(form);
    triggerCode(form);
    setMessage('');
    setAttachment('');
  };
  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AiCode;
