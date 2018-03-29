#import <UIKit/UIKit.h>
#import "GCDAsyncUdpSocket.h"
#import <CoreMotion/CoreMotion.h>

@interface ViewController : UIViewController <GCDAsyncUdpSocketDelegate>
@property (strong, nonatomic) CMMotionManager *motionManager;
@property (strong, nonatomic) IBOutlet UIWebView *WEB1;
@property (strong, nonatomic) IBOutlet UILabel *X;
@property (strong, nonatomic) IBOutlet UILabel *Y;
@property (strong, nonatomic) IBOutlet UILabel *Z;
- (IBAction)FORWARDAction:(id)sender;
- (IBAction)FORWARDActionStop:(id)sender;
- (IBAction)BACKWARDAction:(id)sender;
- (IBAction)BACKWARDActionStop:(id)sender;


@end

