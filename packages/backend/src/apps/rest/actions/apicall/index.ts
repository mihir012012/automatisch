import { IJSONObject } from '@automatisch/types';
import defineAction from '../../../../helpers/define-action';

export default defineAction({
  name: 'Call an api',
  key: 'callApi',
  description: 'Call an api',
  arguments: [
    {
      label: 'Body',
      key: 'body',
      type: 'string' as const,
      required: true,
      description: 'Body of the email.',
      variables: true,
    },
  ],

  async run($) {
    const info = { data: $ } as unknown;

    console.log('EXECUTING REST', info);
    // const info = await transporter($).sendMail({
    //   from: `${$.step.parameters.fromName} <${$.step.parameters.fromEmail}>`,
    //   to: ($.step.parameters.to as string).split(','),
    //   replyTo: $.step.parameters.replyTo as string,
    //   cc: ($.step.parameters.cc as string).split(','),
    //   bcc: ($.step.parameters.bcc as string).split(','),
    //   subject: $.step.parameters.subject as string,
    //   text: $.step.parameters.body as string,
    // });

    $.setActionItem({ raw: info as IJSONObject });
  },
});
