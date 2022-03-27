# Notes

```js
  const start = moment([2007, 0, 5]);
  const end   = moment([2007, 0, 10]);
  const result = end.from(start);
  const countries = moment.tz.countries();
  const zonesForCountry = moment.tz.zonesForCountry('GB');
  const now = moment().tz("Europe/London");
  const dst = moment().tz("Europe/London").isDST();
```