# روابط مكشات
هذه الحزمة للنشر في المستودع العام mukshatapp/mukshatapp.github.io فقط، وليست مشروع أندرويد.

1. ارفع محتويات هذا المجلد إلى جذر الفرع main، بما فيها .well-known و.github و.nojekyll.
2. من Settings → Pages اختر Source: GitHub Actions.
3. شغّل Publish Mikshat location links، وانتظر نجاح النشر.
4. تحقق من https://mukshatapp.github.io/.well-known/assetlinks.json (JSON، HTTP200 دون تحويل) ومن رابط /map/?ll=23.934975,47.248199.
5. ثبّت نسخة مكشات4.4 الموقعة بنفس شهادة4.3، وجرّب فتح الرابط من واتساب بعد التحقق من روابط التطبيق في أندرويد.

الأمر التالي للتحقق على Android12+ عند توفر adb:
`adb shell pm verify-app-links --re-verify com.mikshat.maps`
`adb shell pm get-app-links com.mikshat.maps`

البصمة هنا عامة، وتخص التوقيع الحالي. لا ترفع مفاتيح توقيع أو ملفات خرائط أو بيانات خاصة إلى هذا المستودع.
وجود الحزمة محليًا لا يعني نجاح النشر أو تحقق Android App Links. النطاق أعاد404 وقت الفحص، والوصول المصرح للنشر لم يكن متاحًا في بيئة التنفيذ.
