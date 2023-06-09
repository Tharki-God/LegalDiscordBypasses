import { patchAccountSwitcherStrings } from "./AccountSwitcherStrings";
import { patchClientThemeUpdate } from "./ClientThemeUpdate";
import { patchIdle } from "./CurrentUserIdle";
import { patchPTT } from "./Permission";
import { patchBadges } from "./SetBadge";
import { patchSpotifyPause } from "./SpotifyPause";
import { patchSpotifyPremium } from "./SpotifyPremium";
import { patchStreamPreview } from "./StreamPreview";

export const applyInjections = (): void => {
  patchAccountSwitcherStrings();
  patchClientThemeUpdate();
  patchIdle();
  patchPTT();
  patchBadges();
  patchSpotifyPause();
  patchSpotifyPremium();
  patchStreamPreview();
};
