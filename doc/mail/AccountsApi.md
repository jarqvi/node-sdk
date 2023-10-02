# .AccountsApi

All URIs are relative to *https://mail-service.iran.liara.ir/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkMailAvailable**](AccountsApi.md#checkMailAvailable) | **GET** /mails/{mailServerID}/accounts/{accountName}/check-availability | check if mail account is available
[**createMailACcount**](AccountsApi.md#createMailACcount) | **POST** /mails/{mailServerID}/accounts | add mail account
[**deleteMailAccount**](AccountsApi.md#deleteMailAccount) | **DELETE** /mails/{mailServerID}/accounts/{accountID} | delete mail account
[**getAllMailAccounts**](AccountsApi.md#getAllMailAccounts) | **GET** /mails/{mailServerID}/accounts | get all mail accounts


# **checkMailAvailable**
> void checkMailAvailable()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiCheckMailAvailableRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  accountName: "8-gckec0l3o4gi7xhk0jcy075ua034-mug8iq37llr1plnjktgos9hdvpwi4jdixdxxml6jaj4swhsa064e9ybn0-n7dc0zj1z3o53ghg9i6qsiyk0h9c8fvw06p7a54pxfjl9qsi30bx456v41d30994wetshbws0p64c4bfiki.d4mr9nwr1as4j3pfv8kcss4s7m7nnl4lz25sh3v1r9goy8pxfv2ryzgt6ae.d7zuvbrt5wycaueooksju6otpo.ifautvjjct5108mvhj5wimaijj5ar4ihaucunk5lbvuwh2p5benpr8swoqa9woex6dzpdztprol4oxf1vlovr8-wu4jqkr6ra0y0uv60djw970jt9hauo5bs93ajxhzwa2z47zs3p378bgcyme5828j7l6igyo1l0q6ct9.9yu4ivrxn214gibpahdtf93e57lhwd58-qiyhhil1f8etzy51e5k658pq6zsvrzx3d2hzptzd1mew2jaa-1ws6zuqa17fq0e006zbnf7ky56ke835tqzvhwsl6cx5bfv7f1y.idgmcllqh9bh04mnc8360eg2lqm8q8zljvpc.ecm7gtpx6uypgs0csxv80zla1ucgb.ire6yq8vfz9vn4em09ihhroayld-uxbhqr3p2g1b3h3njw9yk4i4arqdwes12gq8i3yd83rb14-00ift0zpojjsph0tqxs7w3atw99duoi0tknlj4-2t3xobvho6qy2iwy640v0hugc5yp6mxohh16xrscqda8kgk4uqu6a1kjv7e4qy5tfrididp6xyq3g5te74-ly5akq2ccqc99nscwdfc9nlut64g3e4587h4gt1bgo83bcouxg5yf679om5f84bz4lnqnmsb1f7cpjb64xcrx4xg3xf38t2b0agz-smbkt3rkgmypobk59nqk7zxnm8d0ncqlqevpg10uf1i2gvjh9e8ptfwch1dzh8mjcl4se6i7guhqpjck.hbcol81gj121x3spm5zc45n36k3eqdd9yjdqs1pkccezqbhcu2de1dtj5h9xwpewy7k8lhpp63kbb0.b16ayv4ij0w38grblikzgx1u1b5luh3bqti0samr35g90paagweihhdx02gck0z8ym-98eol00uxqtpqpaavx61j6y4u7xzv17lybocei9jwtad46vu4h6ubj3ayfw4qh2zfo-66njbzrs9minis3wvbjm1ssur2h4om2x8g5rb7f7mqz5nb8zfohjjqtj0d03-j6sg.0ruzas1z5ipr0l2aconeksz4dda22vc59h1m5y5dhwq4tali336n0mh5mtutv4k80y6mcjm87vcyjkvoqnja2o3-nlrzv5u-j5u4yrblhplugjo0tvpcsh3664thurk971nkuv9zv1scf44hwmeoeo34mhh.kmiqwgr5gl5d7zn9an403c7b3rzrcvrgpkug0lp59q-t2laeybl28q74so3egjbpnxt3s3v3yrt06k5nfrrjdnzz4itf023dj393zvm.h08uwvy37vz7lntsnhji7g8g4pbmor0vdqmangvepzg3oqlz.f6minqnk2ormbwuh43nbp47tf856g3lnld84xthea5ir3rewrx3p4xy0ovfwe33x76z3r16nmuohngzec2se9s6k-6b2que3piesq27mi5hg7nq1h1lcbi1lkydpmkkerem5j-9q2it8et7r6vc148g3c7ix3x53d.epd5dytvvy0nafom9uc9nb8tl4weepoth5f1jx6xo94nqdzxoh09lnt8kj-7didhcjhd3g4bcw1tal57kiyo9mcvrl6zyhwbyr5mpkob74ky1moopte.602ty1lq9mx6vlj6u82i8r6f1j0m2z6wq9tiqr9g1godh97m98iswwfi7tn0z311qyk7w3g8lys76lnam9czkttxv.j9w20xsabkvlrbnxw3ddgd3051sykqga71wscg658q6ok5revf94f9ljzlk90se93a1vhr20g67uzogxuu11oz-c6lnj99wok1kkho2td4jdvf8r8l6d7zctbuykoi9q7be3z5czxkhobupf92jxc703gp2kqp2h37mx51zwk7u-hqxl6vozz64e9ylqtlctszb27du5xaj94drh22a80u0za2eeqrwg4i7vn7m0mwpzhsn0mh4mp-d8r7jdgqzqqfk61c5m029vs21vjxujbhfroowyg7kermssr8wlz1p41z27wqc10hlz.rcniq0ahgot5yfojxs7szzdlb0zprk3.0l96fe.z2wmcwvloejyoq8gocptat3lpq2mdr4mogxzcatr3t5wg1mycnozhgto42b8pyvl4xojzaps2amu18wyw8zm5v0608wqjngg.d1phbf5n2nlntkdn6dizveuevujwayzorui28mvewnq5xsn8xb07ftdm6np3.y1n0qurq5phmem49tj3qkz7jqpa9182x8eplhwh7qxtgzfbsgfeaswz3c0bh827vs-0oohke7s6s3gor6shpxnuwltlo1qn3sag57na7-ykfyueyid364gqpbz6q3c55i0pljcakamx2emf0vo7spohgmqmww8t23x90tfmbd5y020zplgz7mfx1imw4j4z31cbe.k43z-9nx7yopdndbi3v1h33sn6esbxwj6wcjfbvf7j8v9l1r69tv35q8089x6n90sntwohathk46o708c3tnzbdi-j8nafq8x0pkqmw9k9bwpqz2i5u4bvn1rbrbchnsijuvu4j-x8x8e3mmf-1di1uhkl4cnqyx7a-f65i3l3lch3igfv3sdwudh7gf8pmwscgo8c7z7ej0o8alw3ow9b4kko83nm25aenlj0c-pn09jfb3gqr5g9rlr5ijy1anfv2gk1tmhajpmq4v3u0l3k9pwn0chnjn0tg43rv5hf3r5lalmv4cwlprs5qyjd87j.pa4v3tcgpy6z0nvqoywp0ug40nm12jiig560byubyng2da23ze1w32494nii19t6tzs62fkfqhven1x6-sm4wkq555bzbeysmqs6ckp0g7l2mgoucuu855am5rs9s4fhccw3xvp1882igb-1u2eszywhx2ewg0zyex4ngua1zo17xot9khril1kz17mfq6g7tf.dw9uy1w0v6km4f95gskx1se2to7p3mbf7srgvsde5an96kvn0yt98lh4e3feqepupm8395rhmsutegzz0gn723nmoih75zj819.k87yflkc1vta9qalfw9uha20k52roann89grgpjk15hqnqu9fuqeyn0tzwp35494i87nc3u20mc9lr2krbvdms0x3wt.kpy8hjjgsget22z438yh4f0fdip6h9ushdx43sxznz3olqasi7nbqnaybiti7m75c7o5trbm953i38kgyi6086.mf9amrf1gh5zcvkppng9984t8mc4pgnd574m7ggci9u2lox4oh731c3u2gdzbmfp.8isqd6l0j7krk2qbsb0prow2lecnp29s32useq2aa4p808qpq46x2nd9k4ygcxt6unxmws1ver01lhoj65.ovi9.o8t6j-wqh6ahn27x9kmh1snssffay5gxnicsur0z10ea2r8xlsndzgvfz5gar4n-q9ftph5s2wtsxqm7h3vs2qqod15yehxcx2h-ftthpygzhln3cnah67krboi6r32s21dx4t14twgm5mfrn63y54e42q6tf17enpyyh7ac",
};

apiInstance.checkMailAvailable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **accountName** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server not found |  -  |
**409** | Account already taken. |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createMailACcount**
> void createMailACcount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiCreateMailACcountRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // Model5 (optional)
  body: {
    name: "8-gckec0l3o4gi7xhk0jcy075ua034-mug8iq37llr1plnjktgos9hdvpwi4jdixdxxml6jaj4swhsa064e9ybn0-n7dc0zj1z3o53ghg9i6qsiyk0h9c8fvw06p7a54pxfjl9qsi30bx456v41d30994wetshbws0p64c4bfiki.d4mr9nwr1as4j3pfv8kcss4s7m7nnl4lz25sh3v1r9goy8pxfv2ryzgt6ae.d7zuvbrt5wycaueooksju6otpo.ifautvjjct5108mvhj5wimaijj5ar4ihaucunk5lbvuwh2p5benpr8swoqa9woex6dzpdztprol4oxf1vlovr8-wu4jqkr6ra0y0uv60djw970jt9hauo5bs93ajxhzwa2z47zs3p378bgcyme5828j7l6igyo1l0q6ct9.9yu4ivrxn214gibpahdtf93e57lhwd58-qiyhhil1f8etzy51e5k658pq6zsvrzx3d2hzptzd1mew2jaa-1ws6zuqa17fq0e006zbnf7ky56ke835tqzvhwsl6cx5bfv7f1y.idgmcllqh9bh04mnc8360eg2lqm8q8zljvpc.ecm7gtpx6uypgs0csxv80zla1ucgb.ire6yq8vfz9vn4em09ihhroayld-uxbhqr3p2g1b3h3njw9yk4i4arqdwes12gq8i3yd83rb14-00ift0zpojjsph0tqxs7w3atw99duoi0tknlj4-2t3xobvho6qy2iwy640v0hugc5yp6mxohh16xrscqda8kgk4uqu6a1kjv7e4qy5tfrididp6xyq3g5te74-ly5akq2ccqc99nscwdfc9nlut64g3e4587h4gt1bgo83bcouxg5yf679om5f84bz4lnqnmsb1f7cpjb64xcrx4xg3xf38t2b0agz-smbkt3rkgmypobk59nqk7zxnm8d0ncqlqevpg10uf1i2gvjh9e8ptfwch1dzh8mjcl4se6i7guhqpjck.hbcol81gj121x3spm5zc45n36k3eqdd9yjdqs1pkccezqbhcu2de1dtj5h9xwpewy7k8lhpp63kbb0.b16ayv4ij0w38grblikzgx1u1b5luh3bqti0samr35g90paagweihhdx02gck0z8ym-98eol00uxqtpqpaavx61j6y4u7xzv17lybocei9jwtad46vu4h6ubj3ayfw4qh2zfo-66njbzrs9minis3wvbjm1ssur2h4om2x8g5rb7f7mqz5nb8zfohjjqtj0d03-j6sg.0ruzas1z5ipr0l2aconeksz4dda22vc59h1m5y5dhwq4tali336n0mh5mtutv4k80y6mcjm87vcyjkvoqnja2o3-nlrzv5u-j5u4yrblhplugjo0tvpcsh3664thurk971nkuv9zv1scf44hwmeoeo34mhh.kmiqwgr5gl5d7zn9an403c7b3rzrcvrgpkug0lp59q-t2laeybl28q74so3egjbpnxt3s3v3yrt06k5nfrrjdnzz4itf023dj393zvm.h08uwvy37vz7lntsnhji7g8g4pbmor0vdqmangvepzg3oqlz.f6minqnk2ormbwuh43nbp47tf856g3lnld84xthea5ir3rewrx3p4xy0ovfwe33x76z3r16nmuohngzec2se9s6k-6b2que3piesq27mi5hg7nq1h1lcbi1lkydpmkkerem5j-9q2it8et7r6vc148g3c7ix3x53d.epd5dytvvy0nafom9uc9nb8tl4weepoth5f1jx6xo94nqdzxoh09lnt8kj-7didhcjhd3g4bcw1tal57kiyo9mcvrl6zyhwbyr5mpkob74ky1moopte.602ty1lq9mx6vlj6u82i8r6f1j0m2z6wq9tiqr9g1godh97m98iswwfi7tn0z311qyk7w3g8lys76lnam9czkttxv.j9w20xsabkvlrbnxw3ddgd3051sykqga71wscg658q6ok5revf94f9ljzlk90se93a1vhr20g67uzogxuu11oz-c6lnj99wok1kkho2td4jdvf8r8l6d7zctbuykoi9q7be3z5czxkhobupf92jxc703gp2kqp2h37mx51zwk7u-hqxl6vozz64e9ylqtlctszb27du5xaj94drh22a80u0za2eeqrwg4i7vn7m0mwpzhsn0mh4mp-d8r7jdgqzqqfk61c5m029vs21vjxujbhfroowyg7kermssr8wlz1p41z27wqc10hlz.rcniq0ahgot5yfojxs7szzdlb0zprk3.0l96fe.z2wmcwvloejyoq8gocptat3lpq2mdr4mogxzcatr3t5wg1mycnozhgto42b8pyvl4xojzaps2amu18wyw8zm5v0608wqjngg.d1phbf5n2nlntkdn6dizveuevujwayzorui28mvewnq5xsn8xb07ftdm6np3.y1n0qurq5phmem49tj3qkz7jqpa9182x8eplhwh7qxtgzfbsgfeaswz3c0bh827vs-0oohke7s6s3gor6shpxnuwltlo1qn3sag57na7-ykfyueyid364gqpbz6q3c55i0pljcakamx2emf0vo7spohgmqmww8t23x90tfmbd5y020zplgz7mfx1imw4j4z31cbe.k43z-9nx7yopdndbi3v1h33sn6esbxwj6wcjfbvf7j8v9l1r69tv35q8089x6n90sntwohathk46o708c3tnzbdi-j8nafq8x0pkqmw9k9bwpqz2i5u4bvn1rbrbchnsijuvu4j-x8x8e3mmf-1di1uhkl4cnqyx7a-f65i3l3lch3igfv3sdwudh7gf8pmwscgo8c7z7ej0o8alw3ow9b4kko83nm25aenlj0c-pn09jfb3gqr5g9rlr5ijy1anfv2gk1tmhajpmq4v3u0l3k9pwn0chnjn0tg43rv5hf3r5lalmv4cwlprs5qyjd87j.pa4v3tcgpy6z0nvqoywp0ug40nm12jiig560byubyng2da23ze1w32494nii19t6tzs62fkfqhven1x6-sm4wkq555bzbeysmqs6ckp0g7l2mgoucuu855am5rs9s4fhccw3xvp1882igb-1u2eszywhx2ewg0zyex4ngua1zo17xot9khril1kz17mfq6g7tf.dw9uy1w0v6km4f95gskx1se2to7p3mbf7srgvsde5an96kvn0yt98lh4e3feqepupm8395rhmsutegzz0gn723nmoih75zj819.k87yflkc1vta9qalfw9uha20k52roann89grgpjk15hqnqu9fuqeyn0tzwp35494i87nc3u20mc9lr2krbvdms0x3wt.kpy8hjjgsget22z438yh4f0fdip6h9ushdx43sxznz3olqasi7nbqnaybiti7m75c7o5trbm953i38kgyi6086.mf9amrf1gh5zcvkppng9984t8mc4pgnd574m7ggci9u2lox4oh731c3u2gdzbmfp.8isqd6l0j7krk2qbsb0prow2lecnp29s32useq2aa4p808qpq46x2nd9k4ygcxt6unxmws1ver01lhoj65.ovi9.o8t6j-wqh6ahn27x9kmh1snssffay5gxnicsur0z10ea2r8xlsndzgvfz5gar4n-q9ftph5s2wtsxqm7h3vs2qqod15yehxcx2h-ftthpygzhln3cnah67krboi6r32s21dx4t14twgm5mfrn63y54e42q6tf17enpyyh7ac",
  },
};

apiInstance.createMailACcount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Model5**|  |
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMailAccount**
> void deleteMailAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiDeleteMailAccountRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
  // string
  accountID: "62ECB020842930cc01FFCCfe",
};

apiInstance.deleteMailAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined
 **accountID** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server or Mail Account not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllMailAccounts**
> MailAccounts getAllMailAccounts()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountsApi(configuration);

let body:.AccountsApiGetAllMailAccountsRequest = {
  // string
  mailServerID: "62ECB020842930cc01FFCCfe",
};

apiInstance.getAllMailAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mailServerID** | [**string**] |  | defaults to undefined


### Return type

**MailAccounts**

### Authorization

[jwt](README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Mail Server not found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


