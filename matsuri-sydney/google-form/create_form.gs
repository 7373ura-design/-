/**
 * NAMI STUDIO — Matsuri Sydney 応募フォームを自動で作るスクリプト
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
  var form = FormApp.create('NAMI STUDIO — Free Interior Design for 10 Homes (Matsuri Sydney)');
  form.setDescription(
    'For guests who visited us at Matsuri Sydney.\n' +
    'To celebrate our launch, NAMI STUDIO will design 10 Sydney homes for free.\n\n' +
    'What\'s included: a design consultation, a design concept and mood board, ' +
    'up to two rounds of changes, and help finding a licensed builder and quotes.\n' +
    'Not included: construction, materials and furniture.\n\n' +
    'It takes about 1 minute. We\'ll email you within a week.\n' +
    'Your details are used only by NAMI STUDIO and are never shared or sold.'
  );
  form.setCollectEmail(false);
  form.setConfirmationMessage(
    'Thank you! We\'ll email you within a week.\n' +
    'In the meantime, find home ideas on Instagram @nami.studio_au'
  );

  // ── 連絡先 ──
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
  form.addTextItem().setTitle('Suburb').setRequired(true);

  // ── 家について ──
  form.addMultipleChoiceItem().setTitle('Your home')
    .setChoiceValues(['I own my home', 'I\'m planning to buy or build', 'I rent'])
    .setRequired(true);

  form.addMultipleChoiceItem().setTitle('Home type')
    .setChoiceValues(['House', 'Apartment', 'Townhouse'])
    .showOtherOption(true).setRequired(true);

  form.addCheckboxItem().setTitle('What would you like help with?')
    .setChoiceValues([
      'New build',
      'Renovation',
      'One room or styling',
      'Garden',
      'Shop or office'
    ])
    .showOtherOption(true).setRequired(true);

  form.addMultipleChoiceItem().setTitle('When would you like to start?')
    .setChoiceValues(['Within 3 months', 'Within a year', 'Just exploring for now']);

  form.addMultipleChoiceItem().setTitle('Rough budget for the project (optional)')
    .setChoiceValues(['Under $20k', '$20k–$100k', 'Over $100k', 'Not sure yet']);

  form.addParagraphTextItem()
    .setTitle('What would you most like to change or solve at home?')
    .setHelpText('e.g. clutter, light, layout, feel. A few words is fine.')
    .setRequired(true);

  // ── 住んだ後のサポート（新サービスの需要を知るため）──
  form.addCheckboxItem()
    .setTitle('Would any of these help you after moving in? (optional)')
    .setChoiceValues([
      'Storage and organising',
      'Choosing furniture',
      'Matching tableware, colours and scents',
      'A shopping list of what to buy'
    ]);

  form.addMultipleChoiceItem()
    .setTitle('Where did you hear about NAMI?')
    .setChoiceValues(['Matsuri Sydney', 'Instagram', 'Japan Homes', 'A friend'])
    .showOtherOption(true);

  // ── 同意 ──
  form.addCheckboxItem()
    .setTitle('Consent')
    .setChoiceValues(['Yes, NAMI STUDIO may email me about this free design offer.'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Newsletter (optional)')
    .setChoiceValues(['Also send me NAMI\'s home tips and news now and then. (Unsubscribe any time)']);

  // 回答用スプレッドシート（紙の応募もここに手入力する）
  var ss = SpreadsheetApp.create('NAMI — Matsuri Sydney 応募リスト');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('回答用URL（QRに使う）: ' + form.getPublishedUrl());
  Logger.log('短縮URL: ' + form.shortenFormUrl(form.getPublishedUrl()));
  Logger.log('編集用URL: ' + form.getEditUrl());
  Logger.log('スプレッドシート: ' + ss.getUrl());
}
