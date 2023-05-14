import * as Types from "./types";
export default [
  {
    find: '"isPreview"',
    replacements: [
      {
        match: /({key:"gradientPreset",get:function\(\){)return (\w+)}}/,
        replace: `$1var bypassPreset=replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?.SettingValues?.get("gradientPreset", null); return $2= bypassPreset ? bypassPreset : $2}}, {key:"setGradientPreset",get:function(){return (e) => $2=e}}`,
      },
      {
        match: /({key:"isPreview",get:function\(\){return )(\w+)}}/,
        replace: `$1 $2=!replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?.SettingValues?.get("clientThemes")}}`,
      },
    ],
  },
  {
    find: '"systemPrefersColorScheme"',
    replacements: [
      {
        match: /({key:"theme",get:function\(\){)return (\w+\(\))}}/,
        replace: `$1var bypassPreset=replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?.SettingValues?.get("gradientPreset", null); return bypassPreset ? bypassPreset?.theme : $2}}`,
      },
    ],
  },
  {
    find: ".expandedFolderIconWrapper",
    replacements: [
      {
        match: /(\(\w+\|\|\w+\))&&(\(\w+=\(0,\w+\.jsx\)\(\w+\.animated\.div)/,
        replace: `(replugged?.plugins?.getExports('dev.tharki.LegalDiscordBypasses')?.SettingValues?.get("plainFolderIcon") || $1) && $2`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];