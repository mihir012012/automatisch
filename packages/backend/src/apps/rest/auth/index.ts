import verifyCredentials from './verify-credentials';
import isStillVerified from './is-still-verified';

export default {
  fields: [
    {
      key: 'endpoint',
      label: 'Endpoint',
      type: 'string' as const,
      required: true,
      readOnly: false,
      value: null,
      placeholder: null,
      description: 'Endpoint for call api.',
      docUrl: 'https://automatisch.io/docs/rest#endpoint',
      clickToCopy: false,
    },
    {
      key: 'method',
      label: 'Method',
      type: 'dropdown' as const,
      required: false,
      readOnly: false,
      value: false,
      placeholder: null,
      description: null,
      docUrl: 'https://automatisch.io/docs/rest#method',
      clickToCopy: false,
      options: [
        {
          label: 'GET',
          value: 'GET',
        },
        {
          label: 'POST',
          value: 'POST',
        },
      ],
    },
  ],
  verifyCredentials,
  isStillVerified,
};
