import React from 'react';
import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';

export type RichTextType = { html: string };

const RichText = ({ html }: RichTextType) => <>{parse(sanitizeHtml(html))}</>;

export default RichText;
