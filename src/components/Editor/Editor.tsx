import { SendOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import BasicTextArea from 'antd/lib/input/TextArea';
import { NewMessageDto } from 'dtos/NewMessageDto';
import React, { createRef, KeyboardEvent, RefObject, useEffect } from 'react';
import { throttle, debounce } from 'throttle-debounce';

import styles from './Editor.module.css';

const { TextArea } = Input;

interface Props {
    onSubmit: (data: NewMessageDto) => void;
    submitting: boolean;
    disabled?: boolean;
    onTyping: (status: boolean) => void;
}

export const Editor: React.FC<Props> = ({ onTyping, onSubmit, submitting, disabled }) => {
    const [form] = useForm();

    const textareaRef: RefObject<BasicTextArea> = createRef();

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [textareaRef]);

    const handleSubmit = (data: { text: string }) => {
        if (data.text) {
            onSubmit({ date: new Date(), text: data.text.trim() });
            form.resetFields();
        }
    };

    const handleFormEnter = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (!event.shiftKey) {
            form.submit();
        }
    };

    const handleChangeStart = throttle(1000, () => {
        onTyping(true);
    });

    const handleChangeEnd = debounce(1000, () => {
        onTyping(false);
    });

    const handleChange = () => {
        handleChangeStart();
        handleChangeEnd();
    };

    return (
        <Form className={styles.root} onFinish={handleSubmit} form={form}>
            <Form.Item className={styles.control} name="text">
                <TextArea
                    ref={textareaRef}
                    rows={1}
                    autoSize={{ minRows: 1, maxRows: 3 }}
                    maxLength={1000}
                    onPressEnter={handleFormEnter}
                    disabled={disabled || submitting}
                    onChange={handleChange}
                />
            </Form.Item>

            <Form.Item className={styles.control}>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    type="primary"
                    icon={<SendOutlined />}
                    block
                    disabled={disabled}
                />
            </Form.Item>
        </Form>
    );
};

Editor.displayName = 'Editor';
