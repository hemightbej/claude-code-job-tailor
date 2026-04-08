import { Font } from '@react-pdf/renderer';

export const registerFonts = () => {
  // OPEN SANS REGISTRATION
  Font.register({
    family: 'Open Sans',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
  });

  Font.register({
    family: 'Open Sans Light',
    fontStyle: 'normal',
    fontWeight: 'light',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0a.ttf`,
  });

  Font.register({
    family: 'Open Sans Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.ttf`,
  });

  Font.register({
    family: 'Open Sans Italic',
    fontStyle: 'italic',
    src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
  });

  // RETHINK SANS REGISTRATION
  Font.register({
    family: 'Rethink Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: `https://fonts.gstatic.com/s/rethinksans/v7/AMODz4SDuXOMCPfdoglY9JQuWHBGG0X45DmqkmFROEnsnQ.ttf`,
  });

  Font.register({
    family: 'Rethink Sans SemiBold',
    fontStyle: 'normal',
    fontWeight: 'semibold',
    src: `https://fonts.gstatic.com/s/rethinksans/v7/AMODz4SDuXOMCPfdoglY9JQuWHBGG0X45Dmqkr9WOEnsnQ.ttf`,
  });

  Font.register({
    family: 'Rethink Sans Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `https://fonts.gstatic.com/s/rethinksans/v7/AMODz4SDuXOMCPfdoglY9JQuWHBGG0X45DmqkoZWOEnsnQ.ttf`,
  });

  // URBANIST REGISTRATION
  Font.register({
    family: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: `https://fonts.gstatic.com/s/urbanist/v18/L0xjDF02iFML4hGCyOCpRdycFsGxSrqDyx4vEZmv.ttf`,
  });

  Font.register({
    family: 'Urbanist Light',
    fontStyle: 'normal',
    fontWeight: 'light',
    src: `https://fonts.gstatic.com/s/urbanist/v18/L0xjDF02iFML4hGCyOCpRdycFsGxSrqDlR4vEZmv.ttf`,
  });

  Font.register({
    family: 'Urbanist SemiBold',
    fontStyle: 'normal',
    fontWeight: 'semibold',
    src: `https://fonts.gstatic.com/s/urbanist/v18/L0xjDF02iFML4hGCyOCpRdycFsGxSrqDFRkvEZmv.ttf`,
  });

  Font.register({
    family: 'Urbanist Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `https://fonts.gstatic.com/s/urbanist/v18/L0xjDF02iFML4hGCyOCpRdycFsGxSrqDLBkvEZmv.ttf`,
  });

  // DM SANS REGISTRATION
  Font.register({
    family: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRSW3z.ttf`,
  });

  Font.register({
    family: 'DM Sans Light',
    fontStyle: 'normal',
    fontWeight: 'light',
    src: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwA_JxRSW3z.ttf`,
  });

  Font.register({
    family: 'DM Sans Medium',
    fontStyle: 'normal',
    fontWeight: 'medium',
    src: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxRSW3z.ttf`,
  });

  Font.register({
    family: 'DM Sans SemiBold',
    fontStyle: 'normal',
    fontWeight: 'semibold',
    src: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAfJtRSW3z.ttf`,
  });

  Font.register({
    family: 'DM Sans Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZtRSW3z.ttf`,
  });

  // ASSISTANT REGISTRATION
  Font.register({
    family: 'Assistant',
    fontStyle: 'normal',
    fontWeight: 'normal',
    src: `https://fonts.gstatic.com/s/assistant/v24/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtuZnIGaV2g.ttf`,
  });

  Font.register({
    family: 'Assistant Light',
    fontStyle: 'normal',
    fontWeight: 'light',
    src: `https://fonts.gstatic.com/s/assistant/v24/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtrhnIGaV2g.ttf`,
  });

  Font.register({
    family: 'Assistant SemiBold',
    fontStyle: 'normal',
    fontWeight: 'semibold',
    src: `https://fonts.gstatic.com/s/assistant/v24/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtjhgIGaV2g.ttf`,
  });

  Font.register({
    family: 'Assistant Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `https://fonts.gstatic.com/s/assistant/v24/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtgFgIGaV2g.ttf`,
  });

  // LATO REGISTRATION
  Font.register({
    family: 'Lato',
    fontStyle: 'normal',
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
  });

  Font.register({
    family: 'Lato Italic',
    fontStyle: 'italic',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
  });

  Font.register({
    family: 'Lato Light',
    fontStyle: 'normal',
    fontWeight: 'light',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh50XSwiPHA.ttf`,
  });

  Font.register({
    family: 'Lato semibold',
    fontStyle: 'normal',
    fontWeight: 'semibold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6MYrmSPY4.ttf`,
  });

  Font.register({
    family: 'Lato Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
  });

  Font.register({
    family: 'Lato Italic',
    fontStyle: 'italic',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
  });
};
