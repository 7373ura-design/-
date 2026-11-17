/**
 * NAMI STUDIO — Founding Monitors 応募フォームを自動で作るスクリプト
 *
 * 使い方（3分）：
 *  1. https://script.google.com を開き「新しいプロジェクト」
 *  2. 中身を全部消して、このファイルの内容を貼り付ける
 *  3. 上の関数選択で「createNamiForm」を選んで ▶ 実行
 *  4. 初回だけ Google の権限確認が出る →「許可」
 *  5. 下の「実行ログ」に フォームURL・編集URL・スプレッドシートURL が出る
 *
 * フォームの回答は自動でスプレッドシートにたまる。
 * 紙で集めた応募も、同じスプレッドシートに手で追加すれば連絡先リストが1つにまとまる。
 */
function createNamiForm() {
  var form = FormApp.create('NAMI STUDIO — Founding Monitors');
  form.setDescription(
    '10 Sydney homes. Free Japandi interior design.\n' +
    'Tell us about your home — we\'ll email you within a week.\n\n' +
    'Design fee only. Furniture, materials and construction are not included.\n' +
    'Your details are used only by NAMI STUDIO and never shared or sold.'
  );
  form.setCollectEmail(false);
  form.setConfirmationMessage(
    'Thank you! We\'ll email you within a week.\n' +
    'In the meantime, find our Japandi DIY ideas on Instagram.'
  );

  form.addTextItem().setTitle('Name').setRequired(true);

  var emailCheck = FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText('Please enter a valid email address.')
    .build();
  form.addTextItem().setTitle('Email')
    .setHelpText('We\'ll contact you here.')
    .setValidation(emailCheck)
    .setRequired(true);

  form.addTextItem().setTitle('Phone (optional)');
  form.addTextItem().setTitle('Instagram @ (optional)');
  form.addTextItem().setTitle('Suburb').setRequired(true);

  form.addMultipleChoiceItem().setTitle('Home type')
    .setChoiceValues(['House', 'Apartment', 'Townhouse'])
    .showOtherOption(true).setRequired(true);

  form.addMultipleChoiceItem().setTitle('Do you own or rent?')
    .setChoiceValues(['Own', 'Rent']).setRequired(true);

  form.addCheckboxItem().setTitle('Which space would you like to change?')
    .setChoiceValues(['Living', 'Bedroom', 'Kitchen', 'Entry', 'Outdoor'])
    .showOtherOption(true).setRequired(true);

  form.addMultipleChoiceItem().setTitle('When would you like to start?')
    .setChoiceValues(['Soon', 'Early 2027', 'Later in 2027', 'Just curious']);

  form.addParagraphTextItem()
    .setTitle('What kind of home would you love to live in?')
    .setHelpText('A few words is fine.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('What would you most like to change?')
    .setHelpText('e.g. clutter, light, layout, feel');

  form.addMultipleChoiceItem()
    .setTitle('Where did you hear about NAMI?')
    .setChoiceValues(['Matsuri Sydney', 'Instagram', 'Japan Homes', 'A friend'])
    .showOtherOption(true);

  form.addCheckboxItem()
    .setTitle('Consent')
    .setChoiceValues(['Yes, NAMI STUDIO may email me about Founding Monitors.'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Newsletter (optional)')
    .setChoiceValues(['Also send me NAMI\'s DIY ideas & news now and then. (Unsubscribe any time)']);

  // 回答用スプレッドシート（紙の応募もここに手入力する）
  var ss = SpreadsheetApp.create('NAMI — Founding Monitors 応募リスト');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('回答用URL（QR・プロフィールに使う）: ' + form.getPublishedUrl());
  Logger.log('短縮URL: ' + form.shortenFormUrl(form.getPublishedUrl()));
  Logger.log('編集用URL: ' + form.getEditUrl());
  Logger.log('スプレッドシート: ' + ss.getUrl());
}
